 <template>

<div class="flex min-h-screen">

  <!-- ================= LEFT SIDE ================= -->
  <section
    class="hidden lg:flex flex-col w-[44%] min-h-screen bg-blue-950 text-white px-10 py-11
           shadow-[14px_0_0_#d9d0ea] [border-top-right-radius:60%_100%] [border-bottom-right-radius:60%_100%]">

    <!-- ✏️ Beddel logo-gan -->
    <img src="../assets/logo.svg"
         alt="Logo" class="h-[70px] w-auto self-start ml-14">

    <!-- ✏️ Beddel sawirka -->
    <img src="../assets/illustration.svg""
         alt="Illustration" class="w-[270px] mt-9 ml-14 rounded-3xl">


    <div class="mt-auto">
      <h1 class="text-4xl font-medium leading-tight bg-blue-950">
        A few more clicks to<br>sign in to your account.
      </h1>
      <p class="mt-5 text-lg leading-relaxed text-[#d8cdea] max-w-md">
        To keep connected with us please login with your personal information by email and password
      </p>
    </div>
  </section>

  <!-- ================= RIGHT SIDE ================= -->
  <section class="relative flex-1 flex justify-center items-start lg:items-center px-5 py-14">

    <form class="w-full max-w-[408px]" onsubmit="return false;">
      <h2 class="text-3xl font-bold mb-12">Sign In</h2>

      <!-- Email -->
      <div class="mb-4">
        <label for="email" class="block text-[15px] font-medium mb-2">
          Email <span class="text-red-500">*</span>
        </label>
        <input id="email" type="email" placeholder="Enter email"
               class="w-full h-10 px-3 text-[15px] border border-gray-300 rounded
                      outline-none focus:border-brand focus:ring-1 focus:ring-brand">
      </div>

      <!-- Password -->
      <div class="mb-4">
        <label for="password" class="block text-[15px] font-medium mb-2">
          Password <span class="text-red-500">*</span>
        </label>
        <div class="flex">
          <input id="password" type="password" placeholder="Enter password"
                 class="flex-1 h-10 px-3 text-[15px] border border-gray-300 border-r-0 rounded-l
                        outline-none focus:border-brand">
          <button type="button" onclick="togglePassword()" aria-label="Show password"
                  class="w-[50px] flex items-center justify-center bg-gray-100 hover:bg-gray-200
                         text-slate-600 rounded-r">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 5C7 5 2.7 8.1 1 12c1.7 3.9 6 7 11 7s9.3-3.1 11-7c-1.7-3.9-6-7-11-7zm0 11.5A4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 0 1 0 9zm0-7a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Remember / Forgot -->
      <div class="flex justify-between items-center text-[15px] text-slate-500 mt-2">
        <label class="flex items-center gap-2.5 cursor-pointer">
          <input type="checkbox" class="w-4 h-4 accent-brand"> Remember me
        </label>
        <a href="#" class="hover:underline">Forgot Password</a>
      </div>

      <!-- Button -->
      <button type="submit"
              class="mt-9 h-[46px] px-11 bg-blue-950 hover:bg-brand-dark text-white text-[15px]
                     font-bold rounded-md transition-colors">
        Login
      </button>

      <!-- Terms -->
      <p class="mt-16 lg:mt-0 lg:absolute lg:bottom-14 lg:w-[408px] text-sm text-slate-500">
        By sign in, you agree to our
        <a href="#" class="text-brand hover:underline">Terms and Conditions</a> &amp;
        <a href="#" class="text-brand hover:underline">Privacy Policy</a>
      </p>
    </form>
  </section>
</div>
 </template>

<script>
  function togglePassword() {
    const p = document.getElementById('password');
    p.type = p.type === 'password' ? 'text' : 'password';
  }
</script>
 