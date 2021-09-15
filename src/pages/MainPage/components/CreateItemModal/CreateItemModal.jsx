import React, { useEffect } from "react";
import {
	Button,
	Dialog,
	DialogContent,
	DialogActions,
	Typography,
	IconButton,
	MenuItem,
	TextField,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import {
	createItem,
	getSpecs,
	getTypes,
	isCreatingModalOpenSelect,
	loadingSelect,
	setIsOpen,
	specsSelect,
	typesSelect,
} from "../../MainPage.slice";
import { useStylesModal } from "./CreateItemModal.styles";
import CloseIcon from "@material-ui/icons/Close";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import BackdropLoader from "../BackdropLoader/BackdropLoader";

const CreateItemModal = () => {
	const dispatch = useDispatch();
	const classes = useStylesModal();
	const open = useSelector(isCreatingModalOpenSelect);
	const specs = useSelector(specsSelect);
	const types = useSelector(typesSelect);
	const loading = useSelector(loadingSelect);

	const requiredMessage = "This field is required";

	const schema = yup.object().shape({
		spec: yup.string().required(requiredMessage),
		subSpec: yup.string(),
		title: yup.string().required(requiredMessage),
		description: yup.string().required(requiredMessage),
		type: yup.string().required(requiredMessage),
	});

	const {
		handleSubmit,
		reset,
		control,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
		defaultValues: {
			spec: "",
			subSpec: "",
			title: "",
			description: "",
			type: "",
		},
	});

	const closeCreateItemModal = () => dispatch(setIsOpen(false));

	const handleFormSubmit = (data) => {
		dispatch(createItem(data)).then(({ meta }) => {
			if (meta.requestStatus === "fulfilled") {
				closeCreateItemModal();
				reset();
			}
		});
	};

	useEffect(() => {
		dispatch(getSpecs());
		dispatch(getTypes());
	}, [dispatch]);

	return (
		<>
			<BackdropLoader isOpen={loading} />
			<Dialog
				aria-labelledby="create-item-modal"
				onClose={closeCreateItemModal}
				open={open}
				fullWidth
			>
				<MuiDialogTitle className={classes.header} disableTypography>
					<Typography variant="h6">Create item</Typography>
					{closeCreateItemModal ? (
						<IconButton
							aria-label="close-button"
							onClick={closeCreateItemModal}
						>
							<CloseIcon />
						</IconButton>
					) : null}
				</MuiDialogTitle>
				<DialogContent className={classes.content} dividers>
					<Typography className={classes.title} gutterBottom>
						General info
					</Typography>
					<form>
						<Controller
							control={control}
							name="spec"
							render={({ field: { onChange, value } }) => (
								<TextField
									className={classes.textField}
									error={errors.spec ? true : false}
									helperText={errors.spec?.message}
									label="Spec section"
									onChange={onChange}
									required
									select
									size="small"
									value={value}
									variant="outlined"
								>
									{specs.map((option) => (
										<MenuItem key={option.value} value={option.value}>
											{option.label}
										</MenuItem>
									))}
								</TextField>
							)}
						/>
						<Controller
							control={control}
							name="subSpec"
							render={({ field: { onChange, value } }) => (
								<TextField
									className={classes.subSpecField}
									error={errors.subSpec ? true : false}
									helperText={errors.subSpec?.message}
									InputLabelProps={{ shrink: true }}
									label="Sub spec section"
									onChange={onChange}
									size="small"
									value={value}
									variant="outlined"
								/>
							)}
						/>
						<Controller
							control={control}
							name="title"
							render={({ field: { onChange, value } }) => (
								<TextField
									className={classes.textField}
									error={errors.title ? true : false}
									helperText={errors.title?.message}
									InputLabelProps={{ shrink: true }}
									label="Title"
									onChange={onChange}
									required
									size="small"
									value={value}
									variant="outlined"
								/>
							)}
						/>
						<Controller
							control={control}
							name="description"
							render={({ field: { onChange, value } }) => (
								<TextField
									className={classes.textField}
									error={errors.description ? true : false}
									helperText={errors.description?.message}
									InputLabelProps={{ shrink: true }}
									label="Description"
									minRows={3}
									multiline
									onChange={onChange}
									required
									size="small"
									value={value}
									variant="outlined"
								/>
							)}
						/>
						<Controller
							control={control}
							name="type"
							render={({ field: { onChange, value } }) => (
								<TextField
									className={classes.textField}
									error={errors.type ? true : false}
									helperText={errors.type?.message}
									label="Type"
									onChange={onChange}
									required
									select
									size="small"
									value={value}
									variant="outlined"
								>
									{types.map((option) => (
										<MenuItem key={option.value} value={option.value}>
											{option.label}
										</MenuItem>
									))}
								</TextField>
							)}
						/>
					</form>
				</DialogContent>
				<DialogActions className={classes.footer}>
					<Button autoFocus color="primary" onClick={closeCreateItemModal}>
						Cancel
					</Button>
					<Button
						autoFocus
						color="primary"
						onClick={handleSubmit(handleFormSubmit)}
						variant="contained"
					>
						Create
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};

export default CreateItemModal;
