import React, { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { Spinner } from "react-bootstrap";

const App = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [files, setFiles] = useState(null);
  const [message, setMessage] = useState("");
  const [alertType, setAlertType] = useState("");
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  // Fonction pour récupérer les produits
  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:4040/products/");
      // Accéder au tableau 'products' à l'intérieur de l'objet 'response.data'
      const productsArray = response.data.products;
      // Vérifier si 'productsArray' est un tableau, sinon réinitialiser 'products' à un tableau vide
      setProducts(Array.isArray(productsArray) ? productsArray : []);
    } catch (error) {
      console.error("Erreur lors de la récupération des produits :", error);
      // Optionnellement, réinitialiser 'products' à un tableau vide en cas d'erreur
      setProducts([]);
    }
  };

  useEffect(() => {
    // Récupérer les produits au chargement du composant
    fetchProducts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);

    if (files) {
      for (let i = 0; i < files.length; i++) {
        formData.append("images", files[i]);
      }
    }

    try {
      const response = await axios.post(
        "http://localhost:4040/products/new",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setMessage(response.data.message);
      setAlertType("success");
      setTitle("");
      setDescription("");
      setPrice("");
      setFiles(null);

      // Mettre à jour la liste des produits après l'ajout d'un nouveau produit
      fetchProducts();
    } catch (error) {
      console.error("Erreur lors de l'ajout du produit :", error);
      setMessage("Erreur lors de l'ajout du produit");
      setAlertType("danger");
    }

    setLoading(false);

    setTimeout(() => {
      setMessage("");
      setAlertType("");
    }, 3000);
  };

  return (
    <div>
      <Navigation />
      <main class="container">
        <div className="py-5 text-center">
          <h2>Ajouter un article</h2>
          {message && (
            <div
              className={`alert alert-${alertType} alert-dismissible fade show`}
              role="alert"
            >
              <strong>
                {alertType === "success" ? "Succès !" : "Erreur !"}
              </strong>{" "}
              {message}
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
          )}
        </div>

        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span>Les articles disponibles</span>
            </h4>
            <ul className="list-group mb-3">
              {/* Boucle pour afficher les produits */}
              {products.length > 0 ? (
                products.map((product) => (
                  <li
                    key={product.id}
                    className="list-group-item d-flex justify-content-between lh-sm"
                  >
                    <div>
                      <h6 className="my-0">{product.title}</h6>
                    </div>
                    <span className="text-body-secondary">
                      {product.price.toLocaleString("fr-FR")} MAD
                    </span>
                  </li>
                ))
              ) : (
                <li className="list-group-item">Aucun produit disponible</li>
              )}
            </ul>
          </div>
          <div className="col-md-7 col-lg-8">
            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-sm-6">
                  <label className="form-label">Nom Article</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="form-control"
                    placeholder="Nom de l'article"
                    required
                  />
                </div>

                <div className="col-sm-6">
                  <label className="form-label">Prix</label>
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="form-control"
                    placeholder="Prix de l'article"
                    required
                  />
                </div>

                <div className="col-12">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    placeholder="Description de l'article"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>

                <div className="col-12 mb-4">
                  <label className="form-label">Image</label>
                  <input
                    type="file"
                    onChange={(e) => setFiles(e.target.files)}
                    className="form-control"
                    multiple
                    required
                  />
                </div>
              </div>

              <button
                className="w-100 btn btn-primary btn-lg"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Spinner animation="border" size="sm" className="me-2" />
                    En cours...
                  </>
                ) : (
                  "Ajouter"
                )}
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
