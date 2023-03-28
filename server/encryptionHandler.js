var forge = require('node-forge');

var serverPrivateKey;

var rsa = forge.pki.rsa;


rsa.generateKeyPair({bits: 2048, workers: 2}, function(err, keypair) {
    // keypair.privateKey, keypair.publicKey
    publicKeyPem = forge.pki.publicKeyToPem(keypair.publicKey);
    serverPrivateKey = keypair.privateKey;

    console.log("PublicKey : ", publicKeyPem);
    res.json({publicKeyPem: publicKeyPem})
});

decryptingData = (ciphertext,privateKey) =>{
    var decryptedData = privateKey.decrypt(ciphertext);
    return decryptedData;
}