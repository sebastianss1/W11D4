class ApplicationController < ActionController::Base
    helper_method :current_user, :logged_in? 
    protect_from_forgery 
    # before_action :require_logged_in

    def login!(user)
        debugger
        @user = user
        session[:session_token] = @user.reset_session_token!
    end 

    def logout!
        debugger
        current_user.reset_session_token!
        session[:session_token] = nil
    end

    def current_user 
        return nil unless session[:session_token]
        @current_user ||= User.find_by(session[:session_token])
    end 

    def logged_in? 
        !!current_user
    end 

    # def require_logged_out
    #     redirect_to users_url(current_user) if logged_in?
    # end 

    def require_logged_in
        redirect_to root_url unless logged_in? 
    end 




end
