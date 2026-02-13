import List "mo:core/List";
import AccessControl "authorization/access-control";
import Principal "mo:core/Principal";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import MixinAuthorization "authorization/MixinAuthorization";
import Time "mo:core/Time";

actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  public type UserProfile = {
    name : Text;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (not caller.equal(user) and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  public type CTAType = {
    #partnerWithUs;
    #requestPilotDeployment;
  };

  public type ContactSubmission = {
    timestamp : Time.Time;
    name : Text;
    organization : Text;
    email : Text;
    message : Text;
    cta : CTAType;
  };

  var contactSubmissions = List.empty<ContactSubmission>();

  public shared ({ caller }) func createSubmission(
    name : Text,
    organization : Text,
    email : Text,
    message : Text,
    cta : CTAType,
  ) : async () {
    let submission : ContactSubmission = {
      timestamp = Time.now();
      name;
      organization;
      email;
      message;
      cta;
    };
    contactSubmissions.add(submission);
  };

  public query ({ caller }) func getAllSubmissions() : async [ContactSubmission] {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can view all submissions");
    };
    contactSubmissions.toArray();
  };
};
