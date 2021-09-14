import React from "react";
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
import { Controller, useForm } from "react-hook-form";
import {
	createItem,
	isCreatingModalOpenSelect,
	setIsOpen,
} from "../../MainPage.slice";
import { useStylesModal } from "./CreateItemModal.styles";
import CloseIcon from "@material-ui/icons/Close";
import MuiDialogTitle from "@material-ui/core/DialogTitle";

const CreateItemModal = () => {
	const dispatch = useDispatch();
	const classes = useStylesModal();
	const open = useSelector(isCreatingModalOpenSelect);

	const specs = [
		{
			value: 1,
			label: "Spec1",
		},
		{
			value: 2,
			label: "Spec2",
		},
		{
			value: 3,
			label: "Spec3",
		},
	];

	const types = [
		{
			value: 1,
			label: "Type1",
		},
		{
			value: 2,
			label: "Type2",
		},
		{
			value: 3,
			label: "Type3",
		},
	];

	const { handleSubmit, control } = useForm();

	const closeCreateItemModal = () => dispatch(setIsOpen(false));

	const handleFormSubmit = (data) => {
		dispatch(createItem(data)).then(({ meta }) => {
			if (meta.requestStatus === "fulfilled") closeCreateItemModal();
		});
	};

	return (
		<Dialog
			open={open}
			onClose={closeCreateItemModal}
			aria-labelledby="create-item-modal"
			fullWidth
		>
			<MuiDialogTitle disableTypography className={classes.header}>
				<Typography variant="h6">Create item</Typography>
				{closeCreateItemModal ? (
					<IconButton aria-label="close" onClick={closeCreateItemModal}>
						<CloseIcon />
					</IconButton>
				) : null}
			</MuiDialogTitle>
			<DialogContent className={classes.content} dividers>
				<Typography gutterBottom className={classes.title}>
					General info
				</Typography>
				<form>
					<Controller
						name="spec"
						control={control}
						render={({ field: { onChange, value } }) => (
							<TextField
								select
								label="Spec section"
								value={value}
								onChange={onChange}
								variant="outlined"
								size="small"
								className={classes.textField}
								required
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
						name="subSpec"
						control={control}
						render={({ field: { onChange, value } }) => (
							<TextField
								label="Sub spec section"
								variant="outlined"
								value={value}
								onChange={onChange}
								size="small"
								className={classes.subSpecField}
								InputLabelProps={{ shrink: true }}
							/>
						)}
					/>
					<Controller
						name="title"
						control={control}
						render={({ field: { onChange, value } }) => (
							<TextField
								label="Title"
								variant="outlined"
								value={value}
								onChange={onChange}
								size="small"
								required
								className={classes.textField}
								InputLabelProps={{ shrink: true }}
							/>
						)}
					/>
					<Controller
						name="description"
						control={control}
						render={({ field: { onChange, value } }) => (
							<TextField
								label="Description"
								variant="outlined"
								value={value}
								onChange={onChange}
								size="small"
								required
								multiline
								minRows={3}
								className={classes.textField}
								InputLabelProps={{ shrink: true }}
							/>
						)}
					/>
					<Controller
						name="type"
						control={control}
						render={({ field: { onChange, value } }) => (
							<TextField
								select
								label="Type"
								value={value}
								onChange={onChange}
								className={classes.textField}
								variant="outlined"
								size="small"
								required
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
				<Button autoFocus onClick={closeCreateItemModal} color="primary">
					Cancel
				</Button>
				<Button
					autoFocus
					onClick={handleSubmit(handleFormSubmit)}
					color="primary"
					variant="contained"
				>
					Create
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default CreateItemModal;
