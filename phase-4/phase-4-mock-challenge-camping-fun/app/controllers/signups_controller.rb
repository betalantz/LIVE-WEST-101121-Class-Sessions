class SignupsController < ApplicationController

    def create
        signup = Signup.create!(signup_params)
        # the specs want us to return the activity associated with a new signup, 
        # so we use the .activity method gained from the belongs_to :activity macro
        render json: signup.activity, status: :created
    end

    private

    def signup_params
        params.permit(:time, :camper_id, :activity_id)
    end
end
