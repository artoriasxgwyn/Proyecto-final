import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const modelUsers = new Schema(
    {
        nombres: String,
        apellidos: String,
        tipoDocumento: String,
        numeroDocumento: String,
        email: String,
        password: String,
        telefono: String,
        direccion: String,
        fechaNacimiento: String,
        genero: String,
        isActive: { type: Boolean, default: true },
        rol: [], //coordinador//rector//secretaria//estudiante//profesor//acudiente,
        estrato: Number,
        sisben: String,
        eps: String,
        tipoSangre: String,
        poblacionVictima: Boolean,
        discapacidad: String,
        etnia: String,
        fotoPerfil: String,
        firmaDigital: String,
        colegio: { type: ObjectId, ref: "modelColleges" }   // referenciado al colegio
    });

export default mongoose.model("modelUsers", modelUsers);