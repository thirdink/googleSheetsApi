const {google} = require('googleapis');
const keys = require('./keys.json');

const client = new google.auth.JWT(
    keys.client_email,
    null,
    keys.private_key,['https://www.googleapis.com/auth/spreadsheets']
);

client.authorize((err,tokens)=>{
    try {
        console.log('connected !');
        gsRun(client);
    } catch (err) {
        console.log(err);
        return;
    }
})

const gsRun= async (cl)=>{
    const gsapi = google.sheets({version:'v4',auth: cl});

    const opt = {
        spreadsheetId: '1UViNkEPeuq6PlLJ7vFoaXjqtrJHMdEHwLrbkFk-Ttfs',
        range: 'Sheet1!A1:D6'
    };

    let data = await gsapi.spreadsheets.values.get(opt);
    console.log(data.data.values);

    // let dataArray = data.data.values;

    // let newDataArray = dataArray.map((r)=>{
    //     r.push(r[0]+ '-'+ r[1]);
    //     return r;
    // });

    // console.log(newDataArray);
}