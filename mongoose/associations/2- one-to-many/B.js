// The MANY
("use strict");
module.exports = (mongoose) => {
    const B_Shcema = new mongoose.Schema(
        {
            name: {
                type: String,
            },
            A_ID: {
                type: mongoose.Schema.Types.ObjectId,   
                ref: "A",   // Refer to the 
            },
        },
        {
            timestamps: true,
        }
    );

    const B = mongoose.model("B", B_Shcema);
    return B;
};             
