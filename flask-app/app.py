from flask import Flask, render_template
app = Flask (__name__)
books = [
    {"title": "I Know Why the Caged Bird Sings", "author": "Maya Angelou", "status": "Reading"},
    {"title": "Black Skin, White Masks", "author": "Franz Fanon", "status":"To Read"},
    {"title": "The Fire Next Time", "author": "James Baldwin", "status":"To Read"}
]
@app.route("/")
def home():
    club_name = "A-L Book Club"
    return render_template ("index.html", club_name=club_name, books=books)
if __name__ == "__main__":
    app.run(debug=True)
    