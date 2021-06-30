import { FC } from "react"

import { Button } from "@material-ui/core"

type Props = {
	handleNext: (nextStep: 0 | 1 | 2 | 3 | 4) => void
	handleBack: (prevStep: 0 | 1 | 2 | 3 | 4) => void
}

const StepTwo: FC<Props> = ({ handleNext, handleBack }) => {
	return (
		<>
			<Button onClick={() => handleBack(1)}>Atrás</Button>
			<Button variant="contained" color="primary" onClick={() => handleNext(3)}>
				Continuar
			</Button>
		</>
	)
}

export default StepTwo
