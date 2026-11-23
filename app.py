
from flask import Flask, jsonify

app = Flask(__name__)

livros = [
    {
        "id": 1,
        "titulo": "O Príncipe",
        "autor": "Nicolau Maquiavel",
        "ano": 1532
    },
    {
        "id": 2,
        "titulo": "A Arte da Guerra",
        "autor": "Sun Tzu",
        "ano": -500
    },
    {
        "id": 3,
        "titulo": "Dom Quixote",
        "autor": "Miguel de Cervantes",
        "ano": 1605
    }
]

@app.route('/livros', methods=['GET'])
def obter_livros():
    return jsonify({"livros": livros})

if __name__ == '__main__':
    app.run(debug=True)