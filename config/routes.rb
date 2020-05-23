Rails.application.routes.draw do
  root 'pages#home'
  get '/about', to: 'pages#about'
  get '/products', to: 'pages#products'
  get '/services', to: 'pages#services'
  get '/solutions', to: 'pages#solutions'
  get '/contact', to: 'pages#contact'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
