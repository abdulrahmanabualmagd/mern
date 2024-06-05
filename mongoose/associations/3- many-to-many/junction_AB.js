module.exports = (mongoose) => {
    const B_Shcema = new mongoose.Schema(
        {
            A_ID: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "A", 
            },
            B_ID: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "B", 
            },
        },
        {
            timestamps: true,
        }
    );

    const B = mongoose.model("B", B_Shcema);
    return B;
};
