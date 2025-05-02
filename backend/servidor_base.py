import sqlite3
import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Crear una base de datos SQLite si no existe
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DB_PATH = os.path.join(BASE_DIR, "tienda.db")

if not os.path.exists(DB_PATH):
    with sqlite3.connect(DB_PATH) as conn:
        cursor = conn.cursor()
        cursor.execute("""CREATE TABLE IF NOT EXISTS productos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT NOT NULL,
            precio REAL NOT NULL,
            descripcion TEXT NOT NULL,
            categoria TEXT,
            imagen TEXT
        )""")

# ✅ Solo UNA vez creamos la app
app = FastAPI()

# ✅ Aplicar el middleware CORS correctamente
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Solo tu frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Rutas
@app.get("/")
def leer_raiz():
    return {"mensaje": "¡Hola desde FastAPI!"}

@app.get("/productos")
def obtener_productos():
    with sqlite3.connect(DB_PATH) as conn:
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM productos")
        productos = cursor.fetchall()

    return [{"id": p[0], "nombre": p[1], "precio": p[2], "descripcion": p[3], "categoria": p[4], "imagen": p[5]} for p in productos]
