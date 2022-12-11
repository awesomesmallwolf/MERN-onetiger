import { AppDataSource } from './data-source'
import { Admin } from './entity/Admin'
import { Configs } from './entity/Configs'
import { hashPassword } from './utils'

AppDataSource.initialize()
    .then(async () => {
        console.log('DB ready')

        // create admin user
        AppDataSource.createQueryBuilder()
            .insert()
            .into(Admin)
            .values({
                email: 'admin@admin.com',
                firstName: 'Timber',
                lastName: 'Saw',
                password: await hashPassword('123456'),
            })
            .execute()

        // website configs
        AppDataSource.createQueryBuilder()
            .insert()
            .into(Configs)
            .values({
                email: 'someone@admin.com',
                tel1: '(O11) 2291-3440',
                tel2: '(O11) 9710-1466',
                whatsapp: '(O11) 9710-1466',
            })
            .execute()

        console.log('seed completed')
    })
    .catch((error) => console.log(error))
