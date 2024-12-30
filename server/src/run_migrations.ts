const { Sequelize } = require('sequelize')
const path = require('path');
const fs = require('fs');


const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres'
})

async function runMigrations() {

    console.log("OK")

    const migrationsDir = path.join(__dirname, 'migrations')
    const queryInterface = sequelize.getQueryInterface()
    
    console.log(migrationsDir)
    console.log(queryInterface)
    const appliedMigrations = await queryInterface.showAllSchemas()
    const migrationFiles = fs.readdirSync(migrationsDir)
    
    console.log(appliedMigrations)
    console.log(migrationFiles)

    for (const file of migrationFiles) {
        const migrationPath = path.join(migrationsDir, file)
        const migration = require(migrationPath)

        if (!appliedMigrations.includes(file)){
            await migration.up(queryInterface, Sequelize)
        } else {
            console.log('Already ran: ', file)
        }
    }

    console.log('migrations applied')
}


runMigrations()
    .then(() => {
        console.log('migrations completed')
        sequelize.close()
    })
    .catch(() => {
        sequelize.close()
    })