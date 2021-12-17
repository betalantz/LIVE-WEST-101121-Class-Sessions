class SignupsController < ApplicationController

    def index
        render json: Signup.all
    end
end
