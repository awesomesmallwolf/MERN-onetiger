import {
    Autocomplete,
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    TextField,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { useSpring, animated, easings } from 'react-spring'
import UploadFile from '@mui/icons-material/UploadFile'
import { BASE_URL } from '../env'

const SaleFormA = ({configs}: any) => {
    const [open, setOpen] = useState(false)
    const [step, setStep] = useState(1)
    const height = configs?.form == "a" || configs?.form == "c"? 450 : 650
    const [anim, api] = useSpring(() => ({
        from: { bottom: -height + 45 },
        config: {
            duration: 400,
            easing: easings.easeInOutSine,
        },
    }))
    const animLeftToRight = useSpring(() => ({
        from: { right: 125 },
        config: {
            duration: 700,
            easing: easings.easeInOutCubic,
        },
    }))
    const [admins, setAdmins] = useState([])

    useEffect(() => {
        loadAdmins()

        animLeftToRight[1]({
            to: { right: 50 }
        })
    }, [])

    const loadAdmins = async () => {
        let res = await fetch(`${BASE_URL}/admin/administrators`, {
            method: 'GET',
        })
        let data = await res.json()
        setAdmins(data)
    }

    const handle = () => {
        if (open) {
            api({
                to: { bottom: -height + 45 },
                onRest(result, ctrl, item?) {
                    setOpen(false)
                },
            })
        } else {
            api({
                to: { bottom: 0 },
                onRest(result, ctrl, item?) {
                    setOpen(true)
                },
            })
        }
    }

    const a = {
        1: (
            <>
                <span className="text-neutral-900 font-semibold text-center self-center">
                    Entre em contato, faremos uma proposta
                </span>

                <TextField
                    id="standard-basic"
                    label="*Nome"
                    variant="standard"
                />
                <TextField
                    id="standard-basic"
                    label="*Email"
                    variant="standard"
                />
                <div className="flex gap-4">
                    <TextField
                        id="standard-basic"
                        label="*Telefone 1"
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
                        label="*Valor do bem"
                        variant="standard"
                    />
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={admins
                            .filter((a: any) => a?.nome!!)
                            .map((a: any) => ({ label: a?.nome }))}
                        sx={{ width: 300 }}
                        renderInput={(params) => (
                            <TextField {...params} label="*Administradora" />
                        )}
                    />
                </div>
                <Button
                    variant="contained"
                    className="mt-12"
                    style={{ background: ' #080D3B', marginTop: 15 }}
                    onClick={() => setStep(2)}
                >
                    enviar
                </Button>
            </>
        ),
        2: (
            <>
                <TextField
                    id="standard-basic"
                    label="*Quantos reais (R$) você JÁ pagou"
                    variant="standard"
                />
                <Button
                    variant="contained"
                    className="mt-12"
                    style={{ background: ' #080D3B', marginTop: 15 }}
                    onClick={() => setStep(3)}
                >
                    enviar
                </Button>
            </>
        ),
        3: (
            <>
                <span className="text-neutral-900 text-center self-center">
                    Você tem um EXTRATO do consórcio ? (pdf, word, jpg) até
                    heightkb
                </span>
                <Button
                    variant="outlined"
                    className="mt-12"
                    style={{ marginTop: 15 }}
                    onClick={() => setStep(3)}
                    startIcon={<UploadFile />}
                >
                    Escolher Arquivo
                </Button>
                <Button
                    variant="contained"
                    className="mt-12"
                    style={{ background: ' #080D3B', marginTop: 15 }}
                    onClick={() => setStep(4)}
                >
                    enviar
                </Button>
            </>
        ),
        4: (
            <>
                <div className="flex gap-4">
                    <TextField
                        id="standard-basic"
                        label="Tipo de bem"
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
                    onClick={() => setStep(3)}
                >
                    enviar
                </Button>
            </>
        ),
        5: (
            <>
                <TextField
                    id="standard-basic"
                    label="*Quantos reais (R$) você JÁ pagou"
                    variant="standard"
                />
                <Button
                    variant="contained"
                    className="mt-12"
                    style={{ background: ' #080D3B', marginTop: 15 }}
                    onClick={() => setStep(3)}
                >
                    enviar
                </Button>
            </>
        ),
    }

    const c = {
        1: (
            <>
                <span className="text-neutral-900 font-semibold text-center self-center">
                    Entre em contato, faremos uma proposta
                </span>

                <TextField
                    id="standard-basic"
                    label="*Nome"
                    variant="standard"
                />
                <TextField
                    id="standard-basic"
                    label="*Email"
                    variant="standard"
                />
                <div className="flex gap-4">
                    <TextField
                        id="standard-basic"
                        label="*Telefone 1"
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
                        label="*Valor do bem"
                        variant="standard"
                    />
                    <TextField
                        id="standard-basic"
                        label="Quantos reais (R$) você JÁ pagou"
                        variant="standard"
                        required
                    />
                </div>
                <Button
                    variant="contained"
                    className="mt-12"
                    style={{ background: ' #080D3B', marginTop: 15 }}
                    onClick={() => setStep(2)}
                >
                    enviar
                </Button>
            </>
        ),
        2: (
            <>
                <span className="text-neutral-900 text-center self-center">
                    Você tem um EXTRATO do consórcio ? (pdf, word, jpg) até
                    heightkb
                </span>
                <Button
                    variant="outlined"
                    className="mt-12"
                    style={{ marginTop: 15 }}
                    onClick={() => setStep(3)}
                    startIcon={<UploadFile />}
                >
                    Escolher Arquivo
                </Button>
                <Button
                    variant="contained"
                    className="mt-12"
                    style={{ background: ' #080D3B', marginTop: 15 }}
                    onClick={() => setStep(3)}
                >
                    enviar
                </Button>
            </>
        ),
        3: (
            <>
                <TextField
                    id="standard-basic"
                    label="Quantos reais (R$) AINDA FALTAM pagar"
                    variant="standard"
                    required
                />
                <Button
                    variant="contained"
                    className="mt-12"
                    style={{ background: ' #080D3B', marginTop: 15 }}
                    onClick={() => setStep(4)}
                >
                    enviar
                </Button>
            </>
        ),
        4: (
            <>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={admins
                        .filter((a: any) => a.nome!!)
                        .map((a: any) => ({ label: a.nome }))}
                    sx={{ width: 300 }}
                    renderInput={(params) => (
                        <TextField {...params} label="*Administradora" />
                    )}
                />
                <Button
                    variant="contained"
                    className="mt-12"
                    style={{ background: ' #080D3B', marginTop: 15 }}
                    onClick={() => setStep(5)}
                >
                    enviar
                </Button>
            </>
        ),
        5: (
            <>
                <span className="text-neutral-900 font-semibold text-center self-center">
                    E por ultimo preencha as informações abaixo
                </span>
                <div className="flex gap-4">
                    <TextField
                        id="standard-basic"
                        label="*Valor do bem"
                        variant="standard"
                    />
                    <TextField
                        id="standard-basic"
                        label="Quantos reais (R$) você JÁ pagou"
                        variant="standard"
                        required
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
                    onClick={() => setStep(3)}
                >
                    enviar
                </Button>
            </>
        ),
    }

    const d = {
        1: (
            <>
                <span className="text-neutral-900 font-semibold text-center self-center">
                    Entre em contato, faremos uma proposta
                </span>

                <TextField
                    id="standard-basic"
                    label="*Nome"
                    variant="standard"
                />
                <TextField
                    id="standard-basic"
                    label="*Email"
                    variant="standard"
                />
                <div className="flex gap-4">
                    <TextField
                        id="standard-basic"
                        label="*Telefone 1"
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
                        label="*Valor do bem"
                        variant="standard"
                    />
                    <TextField
                        id="standard-basic"
                        label="Tipo de bem"
                        variant="standard"
                        required
                    />
                </div>
                <div className="flex gap-4">
                    <TextField
                        id="standard-basic"
                        label="Situação da Cota"
                        variant="standard"
                    />
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={admins
                            .filter((a: any) => a.nome!!)
                            .map((a: any) => ({ label: a.nome }))}
                        sx={{ width: 300 }}
                        renderInput={(params) => (
                            <TextField {...params} label="*Administradora" />
                        )}
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
                    onClick={() => setStep(2)}
                >
                    enviar
                </Button>
            </>
        ),
        2: (
            <>
                <TextField
                    id="standard-basic"
                    label="Quantos reais (R$) você JÁ pagou"
                    variant="standard"
                    required
                />

                <Button
                    variant="contained"
                    className="mt-12"
                    style={{ background: ' #080D3B', marginTop: 15 }}
                    onClick={() => setStep(3)}
                >
                    enviar
                </Button>
            </>
        ),
        3: (
            <>
                <span className="text-neutral-900 text-center self-center">
                    Você tem um EXTRATO do consórcio ? (pdf, word, jpg) até
                    heightkb
                </span>
                <Button
                    variant="outlined"
                    className="mt-12"
                    style={{ marginTop: 15 }}
                    onClick={() => setStep(3)}
                    startIcon={<UploadFile />}
                >
                    Escolher Arquivo
                </Button>
                <Button
                    variant="contained"
                    className="mt-12"
                    style={{ background: ' #080D3B', marginTop: 15 }}
                    onClick={() => setStep(4)}
                >
                    enviar
                </Button>
            </>
        ),
        4: (
            <>
                <TextField
                    id="standard-basic"
                    label="Quantos reais (R$) AINDA FALTAM pagar"
                    variant="standard"
                    required
                />
                <Button
                    variant="contained"
                    className="mt-12"
                    style={{ background: ' #080D3B', marginTop: 15 }}
                    onClick={() => {}}
                >
                    enviar
                </Button>
            </>
        ),
    }

    const e = {
        1: (
            <>
                <span className="text-neutral-900 font-semibold text-center self-center">
                    Entre em contato, faremos uma proposta
                </span>

                <TextField
                    id="standard-basic"
                    label="*Nome"
                    variant="standard"
                />
                <TextField
                    id="standard-basic"
                    label="*Email"
                    variant="standard"
                />
                <div className="flex gap-4">
                    <TextField
                        id="standard-basic"
                        label="*Telefone 1"
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
                        label="*Valor do bem"
                        variant="standard"
                    />
                    <TextField
                        id="standard-basic"
                        label="Tipo de bem"
                        variant="standard"
                        required
                    />
                </div>
                <div className="flex gap-4">
                    <TextField
                        id="standard-basic"
                        label="Situação da Cota"
                        variant="standard"
                    />
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={admins
                            .filter((a: any) => a.nome!!)
                            .map((a: any) => ({ label: a.nome }))}
                        sx={{ width: 300 }}
                        renderInput={(params) => (
                            <TextField {...params} label="*Administradora" />
                        )}
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
                    onClick={() => setStep(2)}
                >
                    enviar
                </Button>
            </>
        ),
        2: (
            <>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">
                        Entre em contato, faremos uma proposta
                    </FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel
                            value="female"
                            control={<Radio />}
                            label="Sim, Tenho Mais De 30% Pago"
                        />
                        <FormControlLabel
                            value="male"
                            control={<Radio />}
                            label="Não, Não Tenho Mais De 30% Pago"
                        />
                    </RadioGroup>
                </FormControl>

                <Button
                    variant="contained"
                    className="mt-12"
                    style={{ background: ' #080D3B', marginTop: 15 }}
                    onClick={() => setStep(3)}
                >
                    enviar
                </Button>
            </>
        ),
        3: (
            <>
                <span className="text-neutral-900 text-center self-center">
                    Você tem um EXTRATO do consórcio ? (pdf, word, jpg) até
                    heightkb
                </span>
                <Button
                    variant="outlined"
                    className="mt-12"
                    style={{ marginTop: 15 }}
                    onClick={() => setStep(3)}
                    startIcon={<UploadFile />}
                >
                    Escolher Arquivo
                </Button>
                <Button
                    variant="contained"
                    className="mt-12"
                    style={{ background: ' #080D3B', marginTop: 15 }}
                    onClick={() => setStep(4)}
                >
                    enviar
                </Button>
            </>
        ),
        4: (
            <>
                <TextField
                    id="standard-basic"
                    label="Quantos reais (R$) AINDA FALTAM pagar"
                    variant="standard"
                    required
                />
                <Button
                    variant="contained"
                    className="mt-12"
                    style={{ background: ' #080D3B', marginTop: 15 }}
                    onClick={() => setStep(5)}
                >
                    enviar
                </Button>
            </>
        ),
        5: (
            <>
                <div className="flex gap-4">
                    <TextField
                        id="standard-basic"
                        label="*Valor do bem"
                        variant="standard"
                    />
                    <TextField
                        id="standard-basic"
                        label="Quantos reais (R$) você JÁ pagou"
                        variant="standard"
                        required
                    />
                </div>
                <Button
                    variant="contained"
                    className="mt-12"
                    style={{ background: ' #080D3B', marginTop: 15 }}
                    onClick={() => {}}
                >
                    enviar
                </Button>
            </>
        ),
    }

    const forms: any = {
        a,c,d,e
    }

    return (
        <animated.div
            className={`fixed right-[50px] w-[325px] ] bg-white z-30 rounded-t-[16px] overflow-hidden`}
            style={{ bottom: anim.bottom, height, right: animLeftToRight[0].right }}
        >
            <div
                className="bg-primary-1  h-[45px]  text-white flex items-center justify-center font-semibold cursor-pointer "
                onClick={handle}
            >
                Venda Seu Consórcio
            </div>
            <div className="p-5 flex flex-col gap-3 h-full">{configs && configs['form']? forms[configs['form']][step] : null}</div>
        </animated.div>
    )
}

export default SaleFormA
