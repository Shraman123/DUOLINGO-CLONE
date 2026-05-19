import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useGameStore } from "../../store/gameStore";

const ACHIEVEMENTS = [
  { id: "1", emoji: "🔥", title: "7-Day Streak", desc: "Practice 7 days in a row", done: true },
  { id: "2", emoji: "⭐", title: "First Lesson", desc: "Complete your first lesson", done: true },
  { id: "3", emoji: "💯", title: "Perfect Score", desc: "Get 100% on a lesson", done: false },
  { id: "4", emoji: "🏆", title: "Champion", desc: "Reach #1 on leaderboard", done: false },
  { id: "5", emoji: "📚", title: "Bookworm", desc: "Complete 10 lessons", done: false },
  { id: "6", emoji: "💎", title: "Diamond", desc: "Earn 1000 XP", done: false },
];

export default function ProfileScreen() {
  const { xp, streak, hearts } = useGameStore();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarEmoji}>🦅</Text>
            <View style={styles.levelBadge}>
              <Text style={styles.levelText}>12</Text>
            </View>
          </View>
          <Text style={styles.username}>You</Text>
          <Text style={styles.joinDate}>Learning Spanish • 30 days</Text>

          <View style={styles.flagRow}>
            <Text style={styles.flagEmoji}>🇮🇳</Text>
            <Text style={styles.flagText}>India</Text>
          </View>
        </View>

        {/* Stats Row */}
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statEmoji}>🔥</Text>
            <Text style={styles.statValue}>{streak}</Text>
            <Text style={styles.statLabel}>Day Streak</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statEmoji}>⚡</Text>
            <Text style={styles.statValue}>{xp}</Text>
            <Text style={styles.statLabel}>Total XP</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statEmoji}>❤️</Text>
            <Text style={styles.statValue}>{hearts}</Text>
            <Text style={styles.statLabel}>Hearts</Text>
          </View>
        </View>

        {/* Language Progress */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Language Progress</Text>
          <View style={styles.langCard}>
            <Text style={styles.langEmoji}>🇪🇸</Text>
            <View style={styles.langInfo}>
              <Text style={styles.langName}>Spanish</Text>
              <View style={styles.progressTrack}>
                <View style={[styles.progressFill, { width: "35%" }]} />
              </View>
              <Text style={styles.langLevel}>Level 12 • Intermediate</Text>
            </View>
          </View>
        </View>

        {/* Achievements */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Achievements</Text>
          <View style={styles.achievementsGrid}>
            {ACHIEVEMENTS.map((ach) => (
              <View
                key={ach.id}
                style={[styles.achCard, !ach.done && styles.achLocked]}
              >
                <Text style={[styles.achEmoji, !ach.done && styles.achEmojiLocked]}>
                  {ach.done ? ach.emoji : "🔒"}
                </Text>
                <Text style={[styles.achTitle, !ach.done && styles.achTitleLocked]}>
                  {ach.title}
                </Text>
                <Text style={styles.achDesc}>{ach.desc}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Settings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Settings</Text>
          {[
            { icon: "notifications", label: "Notifications", color: "#FF9600" },
            { icon: "moon", label: "Dark Mode", color: "#1CB0F6" },
            { icon: "volume-high", label: "Sound Effects", color: "#CE82FF" },
            { icon: "help-circle", label: "Help & Support", color: "#58CC02" },
          ].map((item) => (
            <TouchableOpacity key={item.label} style={styles.settingRow}>
              <View style={[styles.settingIcon, { backgroundColor: item.color + "20" }]}>
                <Ionicons name={item.icon as any} size={20} color={item.color} />
              </View>
              <Text style={styles.settingLabel}>{item.label}</Text>
              <Ionicons name="chevron-forward" size={18} color="#AFAFAF" />
            </TouchableOpacity>
          ))}
        </View>

        <View style={{ height: 20 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  scroll: { paddingBottom: 20 },
  profileHeader: {
    alignItems: "center",
    paddingVertical: 24,
    paddingHorizontal: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#E5E5E5",
  },
  avatarContainer: { position: "relative", marginBottom: 12 },
  avatarEmoji: { fontSize: 72 },
  levelBadge: {
    position: "absolute",
    bottom: 0,
    right: -4,
    backgroundColor: "#58CC02",
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },
  levelText: { fontSize: 13, fontWeight: "900", color: "#FFFFFF" },
  username: { fontSize: 26, fontWeight: "900", color: "#3C3C3C" },
  joinDate: { fontSize: 14, color: "#AFAFAF", fontWeight: "600", marginTop: 4 },
  flagRow: { flexDirection: "row", alignItems: "center", gap: 6, marginTop: 8 },
  flagEmoji: { fontSize: 20 },
  flagText: { fontSize: 14, fontWeight: "700", color: "#6B6B6B" },
  statsRow: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 12,
  },
  statCard: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F7F7F7",
    borderRadius: 16,
    padding: 14,
    borderWidth: 2,
    borderColor: "#E5E5E5",
    gap: 4,
  },
  statEmoji: { fontSize: 26 },
  statValue: { fontSize: 22, fontWeight: "900", color: "#3C3C3C" },
  statLabel: { fontSize: 11, fontWeight: "700", color: "#AFAFAF", textAlign: "center" },
  section: { paddingHorizontal: 16, marginTop: 8, marginBottom: 8 },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "900",
    color: "#3C3C3C",
    marginBottom: 12,
  },
  langCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    padding: 16,
    backgroundColor: "#F7F7F7",
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#E5E5E5",
  },
  langEmoji: { fontSize: 40 },
  langInfo: { flex: 1, gap: 6 },
  langName: { fontSize: 16, fontWeight: "800", color: "#3C3C3C" },
  progressTrack: {
    height: 10,
    backgroundColor: "#E5E5E5",
    borderRadius: 5,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#58CC02",
    borderRadius: 5,
  },
  langLevel: { fontSize: 12, color: "#AFAFAF", fontWeight: "600" },
  achievementsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  achCard: {
    width: "30%",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#FFF9EC",
    borderRadius: 14,
    borderWidth: 2,
    borderColor: "#FF9600",
    gap: 4,
  },
  achLocked: {
    backgroundColor: "#F7F7F7",
    borderColor: "#E5E5E5",
  },
  achEmoji: { fontSize: 28 },
  achEmojiLocked: { opacity: 0.4 },
  achTitle: {
    fontSize: 11,
    fontWeight: "800",
    color: "#FF9600",
    textAlign: "center",
  },
  achTitleLocked: { color: "#AFAFAF" },
  achDesc: {
    fontSize: 9,
    color: "#AFAFAF",
    textAlign: "center",
    fontWeight: "600",
  },
  settingRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
    gap: 14,
  },
  settingIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  settingLabel: { flex: 1, fontSize: 16, fontWeight: "600", color: "#3C3C3C" },
});
