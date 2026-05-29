
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://uwnhtfkkpxtaopyfyweh.supabase.co";

const supabaseKey =
  "sb_publishable_rlnxq8zUpYNDzfi43pZ5Cw_RozRuyV6";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);
