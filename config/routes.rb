Rails.application.routes.draw do
  get 'sobre/index'
  get 'clientes/index'
  get 'teste/index'
  get 'portfolio/index'
  get 'servicos/index'
  root 'home#index'
end
