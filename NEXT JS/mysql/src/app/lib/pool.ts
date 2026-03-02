import { Pool } from "pg"

const pool = new Pool({
    connectionString: 'postgresql://neondb_owner:npg_9Fip4cAYhkEC@ep-rough-bread-a1o4m0xh-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
    ssl: {
        rejectUnauthorized: false
    }
})

export default pool