import React, { useEffect, useState } from "react";
import api from "../services/api";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AdminPage = () => {
  const [productos, setProductos] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editando, setEditando] = useState(null);

  // FORMULARIO
  const [form, setForm] = useState({
    nombre: "",
    precio: "",
    unidad: "",
    categoria: "",
    stock: "",
    img: "",
    descripcion: ""
  });

  // Cargar datos al entrar
  useEffect(() => {
    cargarProductos();
    cargarUsuarios();
  }, []);

  const cargarProductos = () => {
    api.get("/api/v1/products").then((res) => setProductos(res.data));
  };

  const cargarUsuarios = () => {
    api.get("/api/v1/users").then((res) => setUsuarios(res.data));
  };

  // Abrir modal para crear
  const abrirCrear = () => {
    setEditando(null);
    setForm({
      nombre: "",
      precio: "",
      unidad: "",
      categoria: "",
      stock: "",
      img: "",
      descripcion: ""
    });
    setModalOpen(true);
  };

  // Abrir modal para editar
  const abrirEditar = (p) => {
    setEditando(p.id);
    setForm(p);
    setModalOpen(true);
  };

  // Guardar producto (crear o editar)
  const guardarProducto = async () => {
    try {
      if (editando) {
        await api.put(`/api/v1/products/${editando}`, form);
      } else {
        await api.post("/api/v1/products", form);
      }

      setModalOpen(false);
      cargarProductos();
      alert("Producto guardado con éxito ✔");
    } catch (err) {
      console.error(err);
      alert("Error guardando el producto");
    }
  };

  // Eliminar producto
  const eliminarProducto = async (id) => {
    if (!window.confirm("¿Seguro que deseas eliminar este producto?")) return;

    await api.delete(`/api/v1/products/${id}`);
    cargarProductos();
  };

  // Filtrar
  const productosFiltrados = productos.filter((p) =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <>
      <Header />

      <section className="container py-4">
        <h1 className="fw-bold text-success text-center mb-4">
          🌱 Panel de Administración — HuertoHogar PRO
        </h1>

        {/* RESUMEN */}
        <div className="row mb-4">
          <div className="col-md-4">
            <div className="card shadow-sm p-3 border-success">
              <h5 className="text-success">Productos</h5>
              <h2>{productos.length}</h2>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm p-3 border-success">
              <h5 className="text-success">Usuarios</h5>
              <h2>{usuarios.length}</h2>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm p-3 border-success">
              <h5 className="text-success">Ventas</h5>
              <h2>$0</h2>
            </div>
          </div>
        </div>

        {/* BUSCADOR */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <input
            type="text"
            placeholder="Buscar producto..."
            className="form-control w-50"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
          <button className="btn btn-success" onClick={abrirCrear}>
            ➕ Nuevo Producto
          </button>
        </div>

        {/* TABLA PRODUCTOS */}
        <div className="card shadow-sm mb-4">
          <div className="card-header bg-success text-white">
            <h4 className="m-0">📦 Gestión de Productos</h4>
          </div>

          <div className="card-body table-responsive">
            <table className="table table-bordered align-middle">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Imagen</th>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Stock</th>
                  <th>Categoría</th>
                  <th>Acciones</th>
                </tr>
              </thead>

              <tbody>
                {productosFiltrados.map((p) => (
                  <tr key={p.id}>
                    <td>{p.id}</td>
                    <td>
                      <img
                        src={p.img}
                        alt={p.nombre}
                        width="60"
                        className="rounded"
                      />
                    </td>
                    <td>{p.nombre}</td>
                    <td>${p.precio}</td>
                    <td>{p.stock}</td>
                    <td>{p.categoria}</td>
                    <td>
                      <button
                        className="btn btn-warning btn-sm me-2"
                        onClick={() => abrirEditar(p)}
                      >
                        ✏ Editar
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => eliminarProducto(p.id)}
                      >
                        🗑 Eliminar
                      </button>
                    </td>
                  </tr>
                ))}

                {productosFiltrados.length === 0 && (
                  <tr>
                    <td colSpan="7" className="text-center text-muted">
                      No hay productos para mostrar
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* TABLA USUARIOS */}
        <div className="card shadow-sm">
          <div className="card-header bg-success text-white">
            <h4 className="m-0">👤 Gestión de Usuarios</h4>
          </div>

          <div className="card-body table-responsive">
            <table className="table table-bordered align-middle">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Email</th>
                  <th>Rol</th>
                </tr>
              </thead>

              <tbody>
                {usuarios.map((u) => (
                  <tr key={u.id}>
                    <td>{u.id}</td>
                    <td>{u.nombre}</td>
                    <td>{u.email}</td>
                    <td>
                      <span
                        className={`badge ${
                          u.rol === "admin" ? "bg-danger" : "bg-success"
                        }`}
                      >
                        {u.rol}
                      </span>
                    </td>
                  </tr>
                ))}

                {usuarios.length === 0 && (
                  <tr>
                    <td colSpan="4" className="text-center text-muted">
                      No hay usuarios registrados
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* MODAL CREAR/EDITAR */}
      {modalOpen && (
        <div className="modal fade show d-block" style={{ background: "#0008" }}>
          <div className="modal-dialog">
            <div className="modal-content">

              <div className="modal-header bg-success text-white">
                <h5 className="modal-title">
                  {editando ? "✏ Editar Producto" : "➕ Nuevo Producto"}
                </h5>
                <button className="btn-close" onClick={() => setModalOpen(false)}></button>
              </div>

              <div className="modal-body">
                {Object.keys(form).map((campo) => (
                  <div className="mb-3" key={campo}>
                    <label className="form-label text-capitalize">{campo}</label>
                    <input
                      className="form-control"
                      value={form[campo] || ""}
                      onChange={(e) =>
                        setForm({ ...form, [campo]: e.target.value })
                      }
                    />
                  </div>
                ))}
              </div>

              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setModalOpen(false)}>
                  Cancelar
                </button>
                <button className="btn btn-success" onClick={guardarProducto}>
                  Guardar
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default AdminPage;
