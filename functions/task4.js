function divide ( numerator, denominator ) {
        try {
            if ( typeof numerator !== 'number' || typeof denominator !== 'number' ) {
                throw new Error ( 'All arguments should be a number' );
            } else if ( denominator === 0 ) {
                throw new Error ( 'Impossible to divide on 0' );
            } else {
                let result = numerator / denominator;
                return result;
            }
        } catch ( error ) {
            return error.message;
        } finally {
            console.log ( 'Робота завершена' );
        }
    }
    console.log ( divide (9, 3));
    console.log ( divide (1, 0));
    console.log ( divide (2, 'word'));
