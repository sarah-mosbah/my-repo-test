const express = require('express');

const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/angular-tour-of-heroes'));

app.post('https://checkme-test.herokuapp.com/api/login', async (req, res) => {
    try {
      console.log('ssssss I reached here');
        return res.send(
            `<script>
                const APPLE_SIGN_IN_DATA = ${JSON.stringify(req.body)}
                if (window.opener) {
                    window.opener.postMessage(APPLE_SIGN_IN_DATA, 'https://checkme-test.herokuapp.com/login/');
                    window.close();
                }
            </script>`
        );
    } catch (error) {
        // handle error
        console.log(error);
    }
});
app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname+'/dist/angular-tour-of-heroes/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
