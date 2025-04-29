# ProGuard rules for Android application

# Keep application classes
-keep public class * extends android.app.Application {
    public void onCreate();
}

# Keep Activity classes
-keep public class * extends android.app.Activity {
    public void *(android.os.Bundle);
}

# Keep Fragment classes
-keep public class * extends android.app.Fragment {
    public void *(android.os.Bundle);
}

# Keep Parcelable classes
-keepclassmembers class * implements android.os.Parcelable {
    static ** CREATOR;
}

# Keep View binding classes
-keep class **.databinding.*Binding {
    *;
}

# Keep Retrofit models
-keep class com.example.models.** { *; }

# Keep Glide generated API
-keep class com.bumptech.glide.** { *; }

# Keep rules for Firebase
-keep class com.google.firebase.** { *; }
-dontwarn com.google.firebase.**

# Optimize code
-optimizations !code/simplification/arithmetic,!field/*,!class/merging/*
