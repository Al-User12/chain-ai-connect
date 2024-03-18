const Web3 = require('web3');
const AIModelABI = require('./AIModelABI.json');

// Inisialisasi Web3 provider
const web3 = new Web3('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');

// Instansiasi kontrak AIModel
const AIModelContract = new web3.eth.Contract(AIModelABI, 'CONTRACT_ADDRESS');

// Fungsi untuk mendapatkan prediksi dari model AI di blockchain
async function getAIPrediction(input) {
    try {
        // Panggil fungsi predict dari kontrak AIModel
        const prediction = await AIModelContract.methods.predict(input).call();
        return prediction;
    } catch (error) {
        console.error('Error getting AI prediction:', error);
        return null;
    }
}

module.exports = {
    getAIPrediction
};
