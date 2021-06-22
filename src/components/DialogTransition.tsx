import { FC, forwardRef, ReactElement, Ref } from "react"

import { Slide } from "@material-ui/core"
import { TransitionProps } from "@material-ui/core/transitions"

const DialogTransition = forwardRef(function Transition(
	props: TransitionProps & { children?: ReactElement<any, any> },
	ref: Ref<unknown>
) {
	return <Slide direction="up" ref={ref} {...props} />
})

export default DialogTransition
