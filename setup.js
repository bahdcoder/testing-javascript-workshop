const Ora = require('ora')
const Exec = require('child_process').exec

const projectDependencies = Ora('Installing base project dependencies').start()

Exec('npm install', () => {
    projectDependencies.succeed('Done installing base project dependencies.')

    const testingNodeAppsDependencies = Ora(
        'Installing chapter two dependencies.'
    ).start()

    Exec('cd 2-testing-nodejs-apps && npm install', () => {
        testingNodeAppsDependencies.succeed(
            'Done installing chapter two dependencies.'
        )

        const endToEndTestDependencies = Ora(
            'Installing chapter three dependencies.'
        ).start()

        Exec('cd 3-end-to-end-testing-apps && npm install', () => {
            endToEndTestDependencies.succeed(
                'Done installing chapter three dependencies.'
            )

            const testingReactAppsDependencies = Ora(
                'Installing chapter four dependencies for react-js.'
            ).start()

            Exec(
                'cd 4-testing-client-side-apps/react-js && npm install',
                () => {
                    testingReactAppsDependencies.succeed(
                        'Done installing chapter four dependencies for react-js.'
                    )

                    const testingVueAppsDependencies = Ora(
                        'Installing chapter four dependencies for vue.'
                    ).start()

                    Exec(
                        'cd 4-testing-client-side-apps/vue && npm install',
                        () => {
                            testingVueAppsDependencies.succeed(
                                'Done installing chapter four dependencies for vue.'
                            )
                        }
                    )
                }
            )
        })
    })
})
