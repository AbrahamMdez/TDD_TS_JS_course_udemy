import app from '../config/app';

/* const port = process.env.PORT || 3000; */

app.listen(process.env.PORT, () => {
    console.log(`Server is working Port: ${process.env.PORT}`);
});