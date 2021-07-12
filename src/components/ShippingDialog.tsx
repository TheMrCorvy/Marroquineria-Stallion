import { FC, useState } from "react"

import { Button, Dialog, ListItemText } from "@material-ui/core"

interface Props {
	layout: 1 | 2 | 3
	className?: any
}

const ShippingDialog: FC<Props> = ({ layout, className }) => {
	const showBtn = () => {
		if (layout === 1) {
			return (
				<Button color="inherit" className={className}>
					Envíos
				</Button>
			)
		}
		if (layout === 2) {
			return <div>Envios</div>
		}

		return <ListItemText primary="Envíos" />
	}

	return <>{showBtn()}</>
}

export default ShippingDialog
