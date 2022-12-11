import { Button, TextField, Modal, Fade } from '@mui/material'
import { useEffect, useState } from 'react'
import { useSpring, animated, easings } from 'react-spring'
import UploadFile from '@mui/icons-material/UploadFile'

const SaleFormB = ({ open, handleClose }: any) => {
    const [step, setStep] = useState(true) as any
    const [anim, api] = useSpring(() => ({
        from: { bottom: -450 + 45 },
        config: {
            duration: 400,
            easing: easings.easeInOutSine,
        },
    }))

    const handle = () => {
        if (open) {
            api({
                to: { bottom: -450 + 45 },
                onRest(result, ctrl, item?) {
                    setStep(false)
                },
            })
        } else {
            api({
                to: { bottom: 0 },
                onRest(result, ctrl, item?) {
                    setStep(true)
                },
            })
        }
    }

    const steps: any = {
        1: (
            <>
                <span className="text-neutral-900 font-semibold text-center self-center">
                    Entre em contato, faremos uma proposta
                </span>

                <TextField
                    id="standard-basic"
                    label="Nome"
                    variant="standard"
                />
                <TextField
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                />
                <div className="flex gap-4">
                    <TextField
                        id="standard-basic"
                        label="Telefone 1"
                        variant="standard"
                    />
                    <TextField
                        id="standard-basic"
                        label="Telefone 2"
                        variant="standard"
                    />
                </div>
                <div className="flex gap-4">
                    <TextField
                        id="standard-basic"
                        label="Administradora"
                        variant="standard"
                    />
                    <TextField
                        id="standard-basic"
                        label="Valor do bem"
                        variant="standard"
                    />
                </div>
                <div className="flex gap-4">
                    <TextField
                        id="standard-basic"
                        label="Tipo de bem"
                        variant="standard"
                    />
                    <TextField
                        id="standard-basic"
                        label="N Parcelas pagas"
                        variant="standard"
                    />
                    <TextField
                        id="standard-basic"
                        label="Situação da Cota"
                        variant="standard"
                    />
                </div>
                <TextField
                    id="standard-basic"
                    label="obs"
                    variant="standard"
                    multiline
                    rows={4}
                />
                <Button
                    variant="contained"
                    className="mt-12"
                    style={{ background: ' #080D3B', marginTop: 15 }}
                    onClick={() => {
                        
                    }}
                >
                    enviar
                </Button>
            </>
        ),
    }

    return (
        <Modal
            open={open}
            onClose={() => handleClose()}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Fade in={open}>
                <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                    <div
                        className={` w-[400px] bg-white z-30  rounded-[16px] overflow-hidden`}
                    >
                        <div
                            className="bg-primary-1  h-[45px]  text-white flex items-center justify-center font-semibold cursor-pointer"
                            onClick={handle}
                        >
                            Vender Consórcio
                        </div>
                        <div className="p-5 flex flex-col gap-3 h-full">
                            {steps[step]}
                        </div>
                    </div>
                </div>
            </Fade>
        </Modal>
    )
}

export default SaleFormB
