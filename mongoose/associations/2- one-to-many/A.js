// The ONE
module.exports = (mongoose) => {
    const A_Schema = new mongoose.Schema(
        {
            name: {
                type: String,
            },
        },
        {
            timestamps: true,
        }
    );

    const A = mongoose.model("A", A_Schema);
    return A;
};
