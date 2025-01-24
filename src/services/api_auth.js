import supabase from './supabase';

export async function signup({ full_name, email_address: email, password }) {
  console.log(password);
  console.log(typeof password);
  const { data, error } = await supabase.auth.signUp({
    email,
    password: String(password),
    options: {
      data: {
        full_name,
        avatar: '',
      },
    },
  });

  if (error) {
    console.log('Error encountered when signing up', error);
    throw new Error(error.message);
  }

  return data;
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function get_current_user() {
  const { data: session } = await supabase.auth.getSession();
  if (!session) return null; //since there is no user

  //if there is a user,we get the user from supabase
  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}
