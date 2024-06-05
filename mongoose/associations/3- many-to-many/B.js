module.exports = (mongoose) => {
    const B_Shcema = new mongoose.Schema(
        {
            name: {
                type: String,
            },
        },
        {
            timestamps: true,
        }
    );

    const B = mongoose.model("B", B_Shcema);
    return B;
};
