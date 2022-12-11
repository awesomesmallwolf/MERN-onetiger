import { Button, TextField } from '@mui/material'
import { BASE_URL } from '../../env'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import { useFormik } from 'formik'

const AdminTels = () => {
    const formik = useFormik({
        initialValues: {
            tel1: '',
            tel2: '',
            whatsapp: '',
        },
        onSubmit: async (values) => {
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
                toast.success('Operation successfull.')
            }
        },
    })

    useEffect(() => {
        load()
    }, [])

    const load = async () => {
        let res = await fetch(`${BASE_URL}/admin/get-configs`, {
            method: 'GET',
        })
        let data = await res.json()
        formik.setValues(data)
    }
    return (
        <div className="flex flex-col items-start w-full p-6">
            <span className="text-primary-3 font-medium text-2xl mb-8 dark:text-gray-100">
                Tels
            </span>
            <form className="mb-4" onSubmit={formik.handleSubmit}>
                <div className="flex flex-col w-full gap-6">
                    <TextField
                        type="email"
                        id="tel1"
                        label="TEL 1"
                        variant="standard"
                        onChange={formik.handleChange}
                        value={formik.values.tel1}
                    />
                    <TextField
                        type="email"
                        id="tel2"
                        label="TEL 2"
                        variant="standard"
                        onChange={formik.handleChange}
                        value={formik.values.tel2}
                    />
                    <TextField
                        type="whatsapp"
                        id="whatsapp"
                        label="WhatsApp"
                        variant="standard"
                        onChange={formik.handleChange}
                        value={formik.values.tel1}
                    />
                    <Button
                        variant="contained"
                        className="mt-12"
                        style={{ background: ' #080D3B', marginTop: 15 }}
                        type="submit"
                    >
                        salvor
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default AdminTels
