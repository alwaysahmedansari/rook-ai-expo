// screens/LoginScreen.js

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email.trim()) {
      return Alert.alert("Error", "Please enter your email.");
    }

    if (!password.trim()) {
      return Alert.alert("Error", "Please enter your password.");
    }

    Alert.alert("Success", "Login button pressed.");

    // TODO:
    // Supabase login logic here
    // navigation.replace("Home");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.content}>
        <Text style={styles.logo}>Rook AI</Text>

        <Text style={styles.subtitle}>
          Think clearly. Write naturally.
        </Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#8E8E93"
            autoCapitalize="none"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#8E8E93"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleLogin}
          >
            <Text style={styles.loginText}>Continue</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.secondaryText}>
              Create Account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
  },

  logo: {
    fontSize: 42,
    fontWeight: "700",
    color: "#000",
    textAlign: "center",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    color: "#6E6E73",
    textAlign: "center",
    marginBottom: 40,
  },

  form: {
    gap: 16,
  },

  input: {
    height: 58,
    borderWidth: 1,
    borderColor: "#E5E5EA",
    borderRadius: 16,
    paddingHorizontal: 18,
    fontSize: 16,
    color: "#000",
    backgroundColor: "#FAFAFA",
  },

  loginButton: {
    height: 58,
    borderRadius: 16,
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },

  loginText: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: "600",
  },

  secondaryText: {
    textAlign: "center",
    color: "#007AFF",
    fontSize: 15,
    marginTop: 12,
  },
});