import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { BASE_URL } from '../../env'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import { useFormik } from 'formik';

const Form = () => {
    const formik = useFormik({
        initialValues: {
            form: '',
        },
        onSubmit: async values => {
            let res = await fetch(`${BASE_URL}/admin/update-configs`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem("token")
                },
                body: JSON.stringify(values),
            })
            let data = await res.json()
            if (data['error']) {
                // alert(data.error)
                toast.error(data.error)
            } else {
                toast.success("Operation successfull.")
            }
        },
      });

    useEffect(() => {
        load()
    }, [])
    
    const load = async () => {
        let res = await fetch(`${BASE_URL}/admin/get-configs`, {
            method: 'GET',
        })
        let data = await res.json()
        formik.setValues({form: data?.form})
    }
    return (
        <div className="flex flex-col items-start w-full p-6">
            <span className="text-primary-3 font-medium text-2xl mb-8 dark:text-gray-100">
            FORMULARIES
            </span>
            <form className="mb-4" onSubmit={formik.handleSubmit}>
                <div className="flex flex-col w-full">
                <FormControl fullWidth variant="outlined">
                        <InputLabel id="demo-simple-select-label">
                        FORMULARIES
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="form"
                            value={formik.values.form}
                            label="FORMULARIES"
                            onChange={e => formik.setFieldValue("form", e.target.value)}
                        >
                            <MenuItem value={'a'}>Form A</MenuItem>
                            <MenuItem value={'b'}>Form B</MenuItem>
                            <MenuItem value={'c'}>Form C</MenuItem>
                            <MenuItem value={'d'}>Form D</MenuItem>
                            <MenuItem value={'e'}>Form E</MenuItem>
                            <MenuItem value={'f'}>Form F</MenuItem>
                        </Select>
                    </FormControl>
                    <Button
                        variant="contained"
                        className="mt-12 w-[300px]"
                        style={{ marginTop: 15 }}
                        type="submit"
                        color='secondary'
                    >
                        salvor
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default Form
