module.exports = (mongoose) => {
    const Junction_ABShcema = new mongoose.Schema(
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

    const Junction_AB = mongoose.model("Junction_AB", Junction_ABShcema);
    return Junction_AB;
};
