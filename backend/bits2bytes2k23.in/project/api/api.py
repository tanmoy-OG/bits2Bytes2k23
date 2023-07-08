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
from flask_cors import CORS

api=Api(app)
CORS(app)

api.add_resource(User_login,'/login/') #this api is used for user login 1
api.add_resource(user_signup,'/user_signup/') #this api is used for user sign up 1
api.add_resource(otp_verify,'/otp_verify/') #this otp is for otp verification of login and sign up 1
api.add_resource(forget_password,'/forget_password/') #this api is for forget the password 1
api.add_resource(veiw_profile,'/veiw_profile/') #this api is for veiw participants profile veiw 1
api.add_resource(resend_otp,'/resend_otp/') #this api is for resend the otp 1
api.add_resource(update_profile,'/update_profile/') #this api is for update participants profile 1
api.add_resource(veiw_events,'/veiw_event/') #to veiw all the event 1
api.add_resource(send_image,'/send_image/') #this api is for send image 1
api.add_resource(Participate,'/participate/') #participate any event 1
api.add_resource(praricipated_or_not,'/participated_or_not/') #this api is for check the participant is participated or not on a particular event 1
api.add_resource(no_of_participants,'/no_of_participants/') #this api is for find the no of participants on a particular event 1
api.add_resource(veiw_deleted_user,'/veiw_deleted_user/') #the api is for veiw the deleted user 1
api.add_resource(delete_user,'/delete_user/') #this api is for delete participants 1
api.add_resource(post_event,'/post_event/') #this api is for post the events 1
api.add_resource(veiw_participents,'/veiw_participents/') #this api is for veiw the participants 1
api.add_resource(Download_by_admin,'/download_by_admin/') #this api is for download participants details on a particular event 1
api.add_resource(win,'/veiw_winers/') #this api is for veiw the winer of a particular event 1
api.add_resource(winers,'/post_winers/') #this api is for post winer by admin 1