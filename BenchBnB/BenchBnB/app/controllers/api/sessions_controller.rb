class Api::SessionsController < ApplicationController
    before_action :current_user

    def create 
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user
            login!(@user)
            render 'api/users/show'
        else 
            render json: ["Invalid Credentials"]
        end 
    end

    def destroy
        if @user 
            logout!
        else
            render json: ["Still Logged In"]
        end 
    end 

end 
