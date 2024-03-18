pragma solidity ^0.8.0;

contract TrainingRecords {
    // Event untuk merekam detail pelatihan model AI
    event TrainingRecord(address indexed trainer, uint256 timestamp, string details);

    // Fungsi untuk merekam pelatihan baru
    function recordTraining(string memory _details) external {
        // Emit event untuk merekam pelatihan
        emit TrainingRecord(msg.sender, block.timestamp, _details);
    }
}