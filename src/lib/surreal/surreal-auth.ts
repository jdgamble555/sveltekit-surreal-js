import { Surreal, SurrealDbError } from "surrealdb";


export async function surrealConnect({
    namespace,
    database,
    url
}: {
    namespace: string,
    database: string,
    url: string
}) {

    const db = new Surreal();

    try {

        await db.connect(url, {
            namespace,
            database
        });

    } catch (e) {

        if (e instanceof SurrealDbError) {
            return {
                data: null,
                error: e
            };
        }

        if (e instanceof Error) {
            return {
                data: null,
                error: e
            };
        }

        return {
            data: null,
            error: new Error('Unknown error during SurrealDB connection')
        };
    }
    return {
        data: db,
        error: null
    };
}

export async function surrealLogin({
    db,
    namespace,
    database,
    username,
    password
}: {
    db: Surreal,
    namespace: string,
    database: string,
    username: string,
    password: string
}) {

    try {

        const signinData = await db.signin({
            namespace,
            database,
            variables: {
                username,
                password
            },
            access: 'user'
        });

        return {
            data: signinData,
            error: null
        };

    } catch (e) {

        if (e instanceof SurrealDbError) {
            return {
                data: null,
                error: e
            };
        }

        if (e instanceof Error) {
            return {
                data: null,
                error: e
            };
        }

        return {
            data: null,
            error: new Error('Unknown error during login')
        };
    }
};


export async function surrealRegister({
    db,
    namespace,
    database,
    username,
    password
}: {
    db: Surreal,
    namespace: string,
    database: string,
    username: string,
    password: string
}) {

    try {

        const signupData = await db.signup({
            namespace,
            database,
            variables: {
                username,
                password
            },
            access: 'user'
        });

        return {
            data: signupData,
            error: null
        };

    } catch (e) {

        if (e instanceof SurrealDbError) {
            return {
                data: null,
                error: e
            };
        }

        if (e instanceof Error) {
            return {
                data: null,
                error: e
            };
        }

        return {
            data: null,
            error: new Error('Unknown error during registration')
        };
    }
};