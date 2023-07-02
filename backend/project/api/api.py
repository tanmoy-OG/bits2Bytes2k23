from app import app
from flask_restful import Api
from participants.login import User_login
from participants.sign_up import user_signup
from participants.forget_password import forget_password
from participants.otp_verify import otp_verify
from participants.veiw_profile import veiw_profile
from participants.participate_event import Participate
from participants.veiw_events import veiw_events
from participants.no_of_participants import no_of_participants
from participants.participated_or_not import praricipated_or_not
from participants.resend_otp import resend_otp
from participants.update_profile import update_profile
from participants.veiw_winers import win
from admin.delete_user import delete_user
from admin.download_data import Download_by_admin
from admin.veiw_deleted_user import veiw_deleted_user
from admin.post_event import post_event
from admin.veiw_deleted_user import veiw_deleted_user
from admin.veiw_participents import veiw_participents
from admin.post_winers import winers
from image_send.send_image import send_image

api=Api(app)

api.add_resource(User_login,'/login/') #this api is used for user login
api.add_resource(user_signup,'/user_signup/') #this api is used for user sign up
api.add_resource(otp_verify,'/otp_verify/') #this otp is for otp verification of login and sign up
api.add_resource(forget_password,'/forget_password/') #this api is for forget the password
api.add_resource(veiw_profile,'/veiw_profile') #this api is for veiw participants profile veiw
api.add_resource(Participate,'/participate/') #participate any event
api.add_resource(veiw_events,'/veiw_event/') #to veiw all the event
api.add_resource(veiw_deleted_user,'/veiw_deleted_user/') #the code is not done still now !!!
api.add_resource(delete_user,'/delete_user/') #this api is for delete participants
api.add_resource(post_event,'/post_event/') #this api is for post the events
api.add_resource(veiw_participents,'/veiw_participents/') #this api is for veiw the participants
api.add_resource(send_image,'/send_image/') #this api is for send image
api.add_resource(no_of_participants,'/no_of_participants/')
api.add_resource(praricipated_or_not,'/participated_or_not/')
api.add_resource(resend_otp,'/resend_otp/')
api.add_resource(update_profile,'/update_profile/')
api.add_resource(Download_by_admin,'/download_by_admin/')
api.add_resource(win,'/winers/')
api.add_resource(winers,'/post_winers/')