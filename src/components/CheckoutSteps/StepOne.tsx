import { FC } from "react"

import { Button } from "@material-ui/core"

type Props = {
	handleNext: (nextStep: 0 | 1 | 2 | 3 | 4) => void
	handleBack: (prevStep: 0 | 1 | 2 | 3 | 4) => void
}

const StepOne: FC<Props> = ({ handleNext, handleBack }) => {
	return (
		<>
			<Button onClick={() => handleBack(0)}>Atrás</Button>
			<Button variant="contained" color="primary" onClick={() => handleNext(2)}>
				Continuar
			</Button>
		</>
	)
}

export default StepOne
