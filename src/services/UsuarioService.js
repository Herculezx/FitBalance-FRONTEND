import http from "../common/http-common";
const API_URL = "usuario/";

const findAll = () => {
  return http.mainInstance.get(API_URL + "findAll");
};

const findById = (id) => {
  return http.mainInstance.get(API_URL + `findById/${id}`);
};

const signup = (nome, email, password) => {
  return http.mainInstance.post(API_URL + "signup", {
    nome,
    email,
    password,
  });
};

const signin = async (email, senha) => {
  const response = await http.mainInstance.post(API_URL + "signin", {
    email,
    senha,
  });
  console.log(response.data);
  if (response.data) {
    console.table(response.data);
    localStorage.setItem("user", JSON.stringify(response.data));
    console.log("logado");
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const create = (data) => {
  const formData = new FormData();
  formData.append("nome", data.nome);
  formData.append("email", data.email);
  formData.append("nivelAcesso", data.nivelAcesso);

  return http.mainInstance.post(API_URL + "create", formData);
};

const update = (id, data) => {
  return http.multipartInstance.put(API_URL + `update/${id}`, data);
};

const alterarSenha = (id, data) => {
  const formData = new FormData();
  formData.append("senha", data.senha);

  return http.mainInstance.put(API_URL + `alterarSenha/${id}`, formData);
};

const inativar = (id, data) => {
  return http.mainInstance.put(API_URL + `inativar/${id}`);
};
const inativoPeloUsuario = (id, data) => {
  return http.mainInstance.put(API_URL + `inativoPeloUsuario/${id}`);
};

const reativar = (id, data) => {
  return http.mainInstance.put(API_URL + `reativar/${id}`);
};

const findByNome = (nome) => {
  return http.mainInstance.get(API_URL + `findByNome?nome=${nome}`);
};

const createTeste = (data) => {
  const formData = new FormData();
  formData.append("nome", data.nome);
  formData.append("email", data.email);
  formData.append("nivelAcesso", data.nivelAcesso);

  return http.mainInstance.post(API_URL + "createnew", formData);
};

const getCurrentUserNow = async () => {
  return http.mainInstance.get(API_URL + `findById/${id}`);
};

const UsuarioService = {
  findAll,
  findById,
  signup,
  signin,
  logout,
  getCurrentUser,
  getCurrentUserNow,
  create,
  createTeste,
  update,
  alterarSenha,
  findByNome,
  inativar,
  inativoPeloUsuario,
  reativar,
};

export default UsuarioService;
