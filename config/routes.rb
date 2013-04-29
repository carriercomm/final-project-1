StackOverflowClone::Application.routes.draw do
  devise_for :users

  # Devise setup step 2
  root :to => 'static_pages#home'

  match 'questions/ask' => 'questions#new', :as => 'ask_question', :via => :get
  resources :questions, :only => [:create, :index, :new]

end
