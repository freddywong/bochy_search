Rails.application.routes.draw do
  get '/people' => "people#index" 

  root "pages#home"
end
