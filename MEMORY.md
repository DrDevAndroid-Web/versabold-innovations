# VersaBold — Memory Index

Este archivo es leído automáticamente por Claude al abrir este proyecto.

## Estado del proyecto (2026-07-31)

- Sistema completo construido y listo para primer cliente real
- Backend: Node.js + Express, dependencias instaladas
- Plantilla: React/Vite con sistema de config JSON, CSS tokens, secciones dinámicas
- Supabase: schema SQL listo en `backend/schema/versabold_schema.sql`
  - **PENDIENTE:** Ejecutar `scripts/step1_create_exec_sql.sql` en el SQL Editor de Supabase para habilitar migraciones via script
  - Luego: `node scripts/migrate.js`
- GitHub: pendiente crear repo y subir

## Próximos pasos

1. Ejecutar SQL en Supabase Dashboard → SQL Editor:
   - Pegar contenido de `backend/scripts/step1_create_exec_sql.sql`
   - Luego correr `node scripts/migrate.js` desde `backend/`

2. Crear repo en GitHub y subir el proyecto al VPS

3. Primer cliente real — usar `agente/workflow/intake-checklist.md`

## Credenciales (referencia interna — NO subir a git)

- Supabase URL: `https://fuduzzsfaacdtqvsyaos.supabase.co`
- Supabase Project ID: `fuduzzsfaacdtqvsyaos`
- Clave service_role: en `backend/.env` (ROTAR después de esta sesión)

## Archivos clave

| Archivo | Propósito |
|---------|-----------|
| `CLAUDE.md` | Instrucciones del agente (este proyecto) |
| `agente/workflow/intake-checklist.md` | Preguntas al cliente |
| `agente/workflow/deployment-checklist.md` | Pasos de despliegue |
| `backend/schema/versabold_schema.sql` | Schema SQL completo |
| `backend/scripts/migrate.js` | Script de migración |
| `backend/.env` | Credenciales (nunca a git) |
| `agente/plan-free-template/` | Plantilla React base |
| `agente/theme-presets/` | 5 temas por tipo de negocio |
| `CLIENTES/Plan_FREE/` | Builds por cliente |
