Rails.application.routes.draw do
  get 'teste/index'
  get 'portfolio/index'
  get 'servicos/index'
  root 'home#index'
end
